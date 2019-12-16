using Dal.models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Dal.interfaces
{
    public interface IAppointmentRepository
    {
        Task<Appointment> AddAppointment(Appointment appointment);
        Task<List<Appointment>> GetAll();
        Task<List<Appointment>> GetById(int id);
    }
}
