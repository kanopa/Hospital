﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Dal.models
{
    public class Patient
    {
        public int Id { get; set; }
        public int CardId {get;set;}
        public Card Card { get; set; }
        public string Full_Name { get; set; }
    }
}
