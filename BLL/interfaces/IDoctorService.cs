using Dal.models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BLL.interfaces
{
    public interface IDoctorService
    {
        Task<ICollection<Doctor>> GetDoctors();
        Task<Doctor> AddDoctor(Doctor doctor);
        Task DeleteDoctor(int id);
    }
}
