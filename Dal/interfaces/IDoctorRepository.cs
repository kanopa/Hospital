using Dal.models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Dal.interfaces
{
    public interface IDoctorRepository
    {
        Task<Doctor> AddDoctor(Doctor doctor);
        Task<ICollection<Doctor>> GetDoctors();
        Task DeleteDoctor(int id);
    }
}
