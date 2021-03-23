using System;

namespace Day5
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Console.WriteLine("Enter your name");
            var name=Console.ReadLine();
            var date=DateTime.Now;
            Console.WriteLine($"hello{name} on {date}");
            Console.ReadKey(true);
        }
    }
}
