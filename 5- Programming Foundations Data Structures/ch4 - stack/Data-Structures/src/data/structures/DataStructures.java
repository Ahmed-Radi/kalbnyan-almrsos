package data.structures;
import java.util.*;

public class DataStructures {

    public static void main(String[] args) {
        String userName;
        int numberEmployees = 0,
            counter = 0,
            loop = 0, // using in while loop to know user state wont to contain or stop
            choose = 0;
        Stack myStack = new Stack();
        Scanner myObj = new Scanner(System.in);  // Create a Scanner object
        while(loop == 0){
            System.out.println(" If want add list of employees and show it only press 1\n To add and remove employees by index press 2\n to finish press any number");
            choose = myObj.nextInt(); // enter choose action
            switch(choose) {
                case 1 -> {
                    System.out.println("please enter number your employees");
                    numberEmployees = myObj.nextInt();
                    for(counter = 0;numberEmployees > counter;counter++){
                        System.out.print((counter+1)+"#" + "Enter employee name: ");
                        userName = myObj.next(); // enter name
                        myStack.push(userName);
                    }
                    //check if Stack is empty or not
                    if(!myStack.isEmpty()){
                        System.out.println("if want pritn employees list press 1");
                        choose = myObj.nextInt();
                        switch(choose) {
                            case 1-> {
                                System.out.println("The list of employees is:");
                                while(!myStack.isEmpty()){
                                    System.out.println(myStack.pop());
                                }
                            }
                        }
                    }   
                }
                case 2 -> {
                    System.out.println("please enter number your employees");
                    numberEmployees = myObj.nextInt();
                    for(counter = 0;numberEmployees > counter;counter++){
                        System.out.print((counter+1)+"#" + "Enter employee name: ");
                        userName = myObj.next(); // enter name
                        myStack.push(userName);
                    }
                    //check if Stack is empty or not
                    if(!myStack.isEmpty()){
                        System.out.println("To remove press 1");
                        choose = myObj.nextInt();
                        switch(choose) {                            
                            case 1 ->{
                                int index = 0;
                                System.out.print("Choose index to remove it: ");
                                index = myObj.nextInt();
                                // Remove the element using remove()
                                if(myStack.size()> index){
                                    myStack.remove(index);
                                    System.out.println("new list is:");
                                    while(!myStack.isEmpty()){
                                        System.out.println(myStack.pop());
                                    }
                                }else{
                                    System.out.println("this index not exist -> " + index);
                                }
                            }
                        }
                    }else{
                        System.out.println("list is empty");
                    }
                }
//                preint employees list press 3
//                case 3 -> {
//                }
                default -> {
                    System.out.println("have a nice day ☻♥");
                    loop = 1;
                }
              }
            System.out.println("if you want contain press 0 else press any number");
            loop = myObj.nextInt(); 
        }
        
        
    }
    
}
