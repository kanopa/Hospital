using Dal.models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BLL.interfaces
{
    public interface IPatientService
    {
        Task<Patient> AddPatient(Patient doctor);
    }
}
