using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using BLL.interfaces;
using Dal.interfaces;
using Dal.models;

namespace BLL.services
{
    public class PatientService : IPatientService
    {
        private readonly IPatientRepository patientRepository;
        public PatientService(IPatientRepository patientRepository)
        {
            this.patientRepository = patientRepository;
        }
        public async Task<Patient> AddPatient(Patient patient)
        {
            return await patientRepository.AddPatient(patient);
        }
    }
}
