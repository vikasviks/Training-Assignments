using System;

namespace Delegates
{
    class Program
    {
        delegate void del(string str);

        static void Main(string[] args)
        {
            del d = new del(notify);
            abc(d);
            d = greet;
            abc(d);

        }

        static void foo(int a)
        {
            Console.WriteLine(a);

        }

        static void notify(string str)
        {
            Console.WriteLine($"Notification sent to: {str}");

        }

        static void greet(string a)
        {
            Console.WriteLine($"Greetings sent to: {a}");
        }

        static void abc(del d)
        {
            d("Japan");
        }
    }
}
