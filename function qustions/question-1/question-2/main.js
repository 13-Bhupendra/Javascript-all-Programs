 function table(){

    for(let i=1; i<=10; i++)
    {
        for(j=1; j<=5; j++)
        {
            if(i==10)
            {
                document.write(j + " × " + i + " = " + i*j + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
                document.write("&nbsp ")    
            }
            else if(j==3 && i<5)
            {
                document.write("&nbsp " + j + " × " + i + " = " + i*j + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
                document.write("&nbsp&nbsp&nbsp&nbsp&nbsp")
    
            }
            else if(j==4 && i<4)
            {
                document.write("&nbsp " + j + " × " + i + " = " + i*j + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
                document.write("&nbsp&nbsp&nbsp&nbsp&nbsp")
        
            }
            else if(j==5 && i<3)
            {
                     document.write("&nbsp " + j + " × " + i + " = " + i*j + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
                     document.write("&nbsp&nbsp&nbsp&nbsp&nbsp")
            
            }
            else
            {
                document.write(j + " × " + i + " = " + i*j + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
                document.write("&nbsp&nbsp&nbsp&nbsp&nbsp")
    
            }
        }
        document.write("<br>")
    }

    {
        document.write("<br><br><hr>")
    }
    {
        document.write("<br><br>")
    }
    for(let i=1; i<=10; i++)
        {
       
            for(j=5; j<=10; j++)
            {
                if(i==1)
                {
                    document.write( "&nbsp&nbsp&nbsp " + j + " × " + i + " = " + i*j + "&nbsp&nbsp&nbsp");
                    document.write("&nbsp&nbsp&nbsp&nbsp&nbsp")
                }
                else if (i < 10)
                {
                    document.write(j + " × " + i + " = " + i*j + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
                    document.write("&nbsp&nbsp&nbsp&nbsp&nbsp")
                }
                else{
                    document.write(j + " × " + i + " = " + i*j + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
                    document.write("&nbsp&nbsp&nbsp")
                }
    
            }
            document.write("<br>")
        }

 }

 table();