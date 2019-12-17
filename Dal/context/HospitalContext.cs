using Dal.models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dal.context
{
    public class HospitalContext : DbContext
    {
        public DbSet<Appointment> Appointments { get; set; }
        public DbSet<Card> Cards { get; set; }
        public DbSet<CardNote> CardNotes { get; set; }
        public DbSet<Doctor> Doctors { get; set; }
        public DbSet<Patient> Patients { get; set; }
        public DbSet<Schedule> Schedules { get; set; }
        public HospitalContext(DbContextOptions<HospitalContext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CardNote>().HasKey(x => new { x.DoctorId, x.CardId, x.AppointmentId });
            modelBuilder.Entity<CardNote>()
                .HasOne(d => d.Doctor)
                .WithMany(d => d.CardNotes)
                .HasForeignKey(d => d.DoctorId)
                .OnDelete(DeleteBehavior.Restrict);
            modelBuilder.Entity<CardNote>()
                .HasOne(a => a.Appointment)
                .WithMany(a => a.CardNotes)
                .HasForeignKey(a => a.AppointmentId)
                .OnDelete(DeleteBehavior.Restrict);
            modelBuilder.Entity<CardNote>()
                .HasOne(c => c.Card)
                .WithMany(c => c.CardNotes)
                .HasForeignKey(c => c.CardId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Patient>()
                .HasOne(pat => pat.Card)
                .WithOne(pat => pat.Patient)
                .HasForeignKey<Card>(pat => pat.PatientId);
            modelBuilder.Entity<Card>()
                .HasOne(card => card.Patient)
                .WithOne(card => card.Card)
                .HasForeignKey<Patient>(card => card.CardId);

            modelBuilder.Entity<Doctor>()
                .HasData(new Doctor[] {
                    new Doctor {Id = 1, Full_Name = "First Doctor", Doctor_Position= "Pediatr"},
                    new Doctor {Id = 2, Full_Name = "Second Doctor", Doctor_Position= "Surgeon"},
                    new Doctor {Id = 3, Full_Name = "Third Doctor", Doctor_Position= "Lor"},
                    new Doctor {Id = 4, Full_Name = "Fourth Doctor", Doctor_Position= "Pediatr"},
                });
        }
    }
}
