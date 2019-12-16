using BLL.interfaces;
using Dal.interfaces;
using Dal.models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BLL.services
{
    public class AppointmentService : IAppointmentService
    {
        private readonly IAppointmentRepository appointmentRepository;
        private readonly IPatientRepository patientRepository;
        public AppointmentService(IAppointmentRepository appointmentRepository, IPatientRepository patientRepository)
        {
            this.appointmentRepository = appointmentRepository;
            this.patientRepository = patientRepository;
        }
        public Task<Appointment> AddAppointment(NewAppointment appointment)
        {
            var Patient = await patientRepository.AddPatient(pa)
        }
    }
}
