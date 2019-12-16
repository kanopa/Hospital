using Dal.models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Dal.interfaces
{
    public interface IPatientRepository
    {
        Task<Patient> AddPatient(Patient patient);
        Task<Patient> GetByName(string name);
    }
}
