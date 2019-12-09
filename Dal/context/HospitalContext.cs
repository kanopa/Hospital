using Dal.models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dal.context
{
    public class HospitalContext : DbContext
    {
        public DbSet<Doctor> Doctors { get; set; }
        public DbSet<Patient> Patients { get; set; }
        public DbSet<Patient_Card> Patient_Cards { get; set; }
        public DbSet<RegistryHospital> RegistryHospitals { get; set; }
        public DbSet<Schedule> Schedules { get; set; }
        public HospitalContext(DbContextOptions<HospitalContext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<RegistryHospital>().HasKey(x => new { x.CardId, x.DoctorId, x.PatientId });
            modelBuilder.Entity<RegistryHospital>()
                .HasOne(x => x.Patient)
                .WithMany(x => x.RegistryHospitals)
                .HasForeignKey(x => x.PatientId)
                .OnDelete(DeleteBehavior.Restrict);
            modelBuilder.Entity<RegistryHospital>()
                .HasOne(x => x.Doctor)
                .WithMany(x => x.RegistryHospitals)
                .HasForeignKey(x => x.DoctorId)
                .OnDelete(DeleteBehavior.Restrict);
            modelBuilder.Entity<RegistryHospital>()
                .HasOne(x => x.Card)
                .WithMany(x => x.RegistryHospitals)
                .HasForeignKey(x => x.CardId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
