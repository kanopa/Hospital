using BLL.interfaces;
using Dal.interfaces;
using Dal.models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BLL.services
{
    public class DoctorService : IDoctorService
    {
        private readonly IDoctorRepository doctorRepository;
        public DoctorService(IDoctorRepository doctorRepository)
        {
            this.doctorRepository = doctorRepository;
        }

        public async Task<Doctor> AddDoctor(Doctor doctor)
        {
            return await doctorRepository.AddDoctor(doctor);
        }

        public async Task DeleteDoctor(int id)
        {
             await doctorRepository.DeleteDoctor(id);
        }

        public async Task<ICollection<Doctor>> GetDoctors()
        {
            return await doctorRepository.GetDoctors();
        }
    }
}
