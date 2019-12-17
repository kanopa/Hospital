﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Dal.models
{
    public class Appointment
    {
        public int Id { get; set; }
        public int PatientId { get; set; }
        public Patient Patient { get; set; }
        public int DoctorId { get; set; }
        public Doctor Doctor { get; set; }
        public DateTime Start_Appointment { get; set; }
        public DateTime End_Appointment { get; set; }
        public ICollection<CardNote> CardNotes { get; set; }

    }
}
