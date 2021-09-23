# Using recursion to implement power and factorial functions


def power(num, pwr):
    if pwr == 0:
        return 1
    else:
        return num * power(num , pwr-1)

def factorial(num):
    if num == 0:
        return 1
    else:
        return num * factorial(num-1)
def countdown(x):
    if x == 0:
        print("done!")
        return
    else:
        print(x, "...")
        countdown(x-1)

loop = 1
name = input("please enter your name: ")
while loop != 0:
    print("Hello ** "+name+" **"+"\nif you want use the power press 1\nif want use factorial press 2\nif want know the countdown for number press 3")
    choose = int(input("please enter your choose: "))
    if choose == 1:
        number = int(input("please enter the number: "))
        pow = int(input("please enter the power: "))
        print("{} to the power of {} is {}".format(number, pow, power(number, pow)))
    elif choose == 2:
        number = int(input("please enter the number: "))
        print("{}! is {}".format(number, factorial(number)))
    elif choose == 3:
        number = int(input("please enter the number: "))
        print("{} to the count down of {} is {}".format(number, countdown(number)))
    else:
        print("* please choose correct number from the list")
    loop = int(input("if you want contain press any number to end press 0: "))

