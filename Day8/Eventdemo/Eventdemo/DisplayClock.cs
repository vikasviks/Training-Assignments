using System;
using System.Collections.Generic;
using System.Text;

namespace Eventdemo
{
   public class DisplayClock
    {
        public void Subscribe(Clock theclock)
        {
            theclock.SecondChanged += new Clock.SecondChangeHandler(TimeHasChanged);
        }

        public void TimeHasChanged(object theClock , TimeInfoEventArgs ti)
        {
            Console.WriteLine("Current time: {0}:{1}:{2}",
            ti.hour.ToString(), ti.minute.ToString(), ti.second.ToString());
        }
    }
}
