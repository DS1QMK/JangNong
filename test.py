var = [1,2,3]
print(1 in var)

var = "Hello World"
print("J" not in var)

X = 10
Y = 20
if 0 < X and Y > 30:
    print("Good")
else:
    print("Bad")

var = 10
var = "Big" if 0 < var else "Small"
print(var)

var = 0
while var < 10:
    var = var + 1
    if var %3 == 0: continue
    if var %5 == 0: break
    print(var)
    
var = [1,2,3]
for one in var:
    print(one)
    
var = [(1,1),(2,2),(3,3)]
for (first, second) in var:
    print(first + second)
    
sum = 0
var = range(1,10)
for one in var:
    sum = sum + one
print(sum)

def add(x,y):
    print(x)
    print(y)
    return(x+y)

var_x = 1
var_y = 2
var_sum = add(var_x, var_y)
print(var_sum)

def sum(*values):
    result = 0
    for one in values:
        result = result + one
        return result

result = sum(1,2,3)
print(result)

def calc(a,b = 10):
    return a+b, a*b

result = calc(1,3)
print(result)

result = calc(10)
print(result)

var = 0
def processing(data):
    global var  # 전역변수
    var = data  # 지역변수
    data = data * 10
    return data*data

data = 10
result = processing(data)
print(var)
print(data)
print(result)
