using System;

namespace Book
{
    class Program
    {
        static void Main(string[] args)
        {
            bookdb b = new bookdb();
            b.AddBook("here's title", "vikas", 100, true);
            b.AddBook("here's title2", "vikas2", 200, true);
            b.AddBook("here's title3", "vikas3", 300, true);
            ProcessBookcallbackDelegate d = new ProcessBookcallbackDelegate(sold);
            ProcessBookcallbackDelegate d2 = new ProcessBookcallbackDelegate(rent);
            b.Processpaperbackbooks(d);
            b.Processpaperbackbooks(d2);
        }

        static void sold(book b)
        {
            Console.WriteLine(b.Author);
        }

        static void rent(book b)
        {
            Console.WriteLine(b.Price);
        }
    }
}
