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

