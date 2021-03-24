﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Eventdemo
{
    public class TimeInfoEventArgs:EventArgs
    {
        public int hour;
        public int minute;
        public int second;

        public TimeInfoEventArgs(int hour,int minute,int second)
        {
            this.hour = hour;
            this.minute = minute;
            this.second = second;
        }
    }
}
