# 입출력함수 연습
variable = 123
print(variable)

variable = 1.23E2
print(variable)
#지수 10^2

variable = 1.23e3
print(variable)
#지수는 대소문자(E, e) 동일하게 출력

variable = 1.23e-2
print(variable)
#지수는 음수로도 적용된다

variable = 0x1f
print(variable)

variable = 0x1F
print(variable)
#16진수의 문자도 대소문자 동일하게 출력된다.

variable = 3/4
print(variable)

variable = 2**3
print(variable)
#**는 2^3이다

variable = 5%2
print(variable)
#%는 나머지를 출력

variable = 5//2
print(variable)
#//는 몫을 말한다

variable = 5/2
print(variable)

#문자열 데이터의 표현 (Escape Code)
variable = '''
JangNong
Hello World
'''
print(variable)
#Enter key도 문자열에 포함된다.

variable = """JangNong
Hello World"""
print(variable)
#Enter key가 들어가지 않고 출력된다

variable = """JangNong\nHello World"""
print(variable)
#\n Enter escape문자


# 문자열 데이터 기본연산
variable = "Hello" + " " + "World"
print(variable)

variable = "Hello" * 2
print(variable)

variable = len("Hello World")
print(variable)

variable = "Hello World"
print(variable[3]) #앞에서 3번째 글짜 출력
print(variable[-3]) #뒤에서 3번째 글짜 출력
print(variable[1:4]) #1~4글짜 출력
print(variable[:5]) #앞에서 5번째 글짜까지 출력
print(variable[6:]) #앞에서 6번째 글짜부터 출력


# 문자열 Formatting
variable = "%d books" % 3
print(variable)
# %d는 숫자입력

variable = "%s books" % "3"
print(variable)
# %S는 문자 입력

variable = "%s books" % 3
print(variable)
# %S는 문자를 받지만 숫자를 넣어도 받는다

variable = "I have {0} {1}".format(3, "books")
print(variable)

number = 3
variable = f'I have {number+2} books'
print(variable)

variable = "I have %d apples and %d books" % (number, number+1)
print(variable)

variable = "The error rate : %d%%" % 55
print(variable)
# The error rate : 55%


#문자열 정렬
variable = "%10s" % "Hello"
print(variable)
#전체 문자열의 길이를 10으로 함

variable = "%-10s" % "Hello"
print(variable)
# 좌측정렬

variable = "{0:<10}".format("Hello")
print(variable)
#왼쪽정렬

variable = "{0:>10}".format("Hello")
print(variable)
#오른쪽 정렬

variable = "{0:^10}".format("Hello")
print(variable)
#가운데 정렬

variable = "{0:-^10}".format("Hello")
print(variable)
#가운데 정렬인데 잘 되었는지 -표시로 채움

variable = "%f" % 3.141592
print(variable)
# %f는 실수

variable = "%.4f" % 3.141592
print(variable)
# 소수점 자리지정

variable = "%10.4f" % 3.141592
print(variable)
# 전체문자는 10자리인데 소수점 4자리

