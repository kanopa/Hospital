using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Dal.context;
using Dal.interfaces;
using Dal.models;

namespace Dal.repositories
{
    public class PatientRepository : IPatientRepository
    {
        private HospitalContext db;
        public PatientRepository(HospitalContext db)
        {
            this.db = db;
        }
        public async Task<Patient> AddPatient(Patient patient)
        {
            var newPatient = await db.Patients.AddAsync(patient);

            await db.SaveChangesAsync();
            return newPatient.Entity;
        }
    }
}
