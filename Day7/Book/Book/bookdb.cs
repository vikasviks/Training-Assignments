using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace Book
{
    public delegate void ProcessBookcallbackDelegate(book book);
    public class bookdb
    {
        ArrayList list = new ArrayList();

        public void AddBook(string title,string author,decimal price,bool paperback)
        {
            list.Add(new book { 
            Title=title,
            Price=price,
            Author=author,
            Paperback=paperback
       });


        }
        public void Processpaperbackbooks(ProcessBookcallbackDelegate processbook)
        {

            foreach(book b in list)
            {
                if (b.Paperback)
                {
                    processbook(b);
                }
            }
        }
    }
}
