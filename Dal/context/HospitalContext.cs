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
        public HospitalContext(DbContextOptions <HospitalContext> options) : base(options)
        {

        }
    }
}
