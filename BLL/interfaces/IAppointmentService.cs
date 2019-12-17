using Dal.models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BLL.interfaces
{
    public interface IAppointmentService
    {
        Task<Appointment> AddAppointment(NewAppointment appointment);
        Task<List<Appointment>> GetAll();
        Task<List<Appointment>> GetById(int id);
    }
}
