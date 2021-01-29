## Day 5 Lecture Notes - Intro to Ruby

## Topics
- Ruby Intro
- Variables
- Conditionals
- Loops
- Methods
- Hashes
- Blocks and Lambdas
- Classes

## Why Ruby?
- og curriculum was all rails
- real-world practice
- learn just enough to do the job
- no lectures in week 9
- until W10D3 

## LSD
- Logic Syntax Data

## Ruby
- both (js & ruby) created in 1995 => Ruby created by Matz
- run to read and write
- synchronous
- Ruby is 10th most popular language
- will create breaking changes, means it is extremely version dependent

## Commenting / Outputting
- '#' single line comment
- '=begin ....... =end' multi-line comment 
- print('hello world') ouputs but no new line
- puts('hello world') outputs with a new line
- puts 'hello world' you do not need the () when invoking a function
- p 'hello?' - gives you the straight up value, also only one with a return value
- return p value - will show in the console


## Falsey Values (only 2)
- nil equiv of null/undefined
- false

## Gets
- gets retrieves a valye from std.out
- puts "What is your name"
- name = gets
- puts name

## Chomp
- remove something from the end of inputs
- name = gets.chomp

## Variables
- no const, let or var
- name = 'Brian'
- name = false  you can easily reassign your variables
- Name = 'Alice' (every constant in Ruby starts with a capital letter)
- NAME = 'Alice' (convention to put constants in all CAPS)

## Case convention
- use snake case

## Casting a value
- converting one type to another
- every single thing in Ruby is an object
- my_string = '7'
- puts my_string.methods
- puts my_string.class
- my_string.to_i - converts to integer
- my_string.to_s - converts to string

## Methods
- ending in ! (destructive) change the original value
- ending in ? always returns a boolean value

## ==
- ruby only has == and !=
- there is no coercion in ruby

## String concatenation
- puts first_name + ' ' + last_name
- puts "#{first_name} #{last_name}"
- template literals in ruby only work with double quotes

## Conditionals
- we don't close the conditional using 'end'
- parens are also optional
- && and || still work the same as js
``` ruby
num = 4

if num > 2
  puts "bigger than two"
end
```
- using an else
``` ruby
num = 4

if num > 2
  puts "bigger than two"
else 
  puts "must be smaller"
end
```
- using an else if
``` ruby
num = 4

if num > 2
  puts "bigger than two"
elsif num > 0
  put "it's a number between 0 and 2"
else 
  puts "must be smaller"
end
```

- instead of != ruby gives us a negative if (unless)
``` ruby
unless num == 5
  puts "choose a better number"
else
  puts "the number is 5"
end
```

## Looping
- for the most part you will use a while loop / each
- do loop
``` ruby
i = 0

loop do
  puts "Hello " + i
  i += 1 

  # this
  if i >= 10
    break
  end

  # or
  break if i >= 10

end
```
- while loop
``` ruby
while i < 5 do
  i += 1
  puts "hello"
end
```
- until loop
``` ruby
until i > 5 do
  i += 1
  puts "hello from until"
end
```

## Array methods for looping
- can accept arguments inside |...|
``` ruby
dogs = ['Scooby doo', 'Rex', 'clifford']

# .each === forEach
dogs.each do |dog|
  puts "I have a dog named #{dog}"
end

# for const dog of dogs
for dog in dogs
  puts dog
end

# .select === filter
# all functions in ruby have an implicit return
filtered = dogs.select do |dog|
  dog.start_with? 'S'
end
puts filtered

# range - loop from 1 to 100
(1..100).each do |num|
  if num % 5 == 0 && num % 3 == 0
    puts 'fizzbuzz'
  elsif num % 5 == 0
    puts 'fizz'
  elsif num % 3 == 0
    puts 'buzz'
  else
    puts num
end

## peform an operation a certain number of times
10.times do

end
```

## Methods
- everything in ruby is an object
- the only things that aren't objects are methods
- instead of function keyword we use 'def'
``` ruby
def say_hello name 
  puts "hello #{name}"
end

say_hello 'Bob'


def add num_one, num_two
  num_one + num_two
end

sum = add 2, 4

## everything is passed as a value in ruby not by reference
def change_it num
  num = 7
end

my_num = 5
puts my_num

change_it my_num
puts my_num
```

## Hashes
``` ruby
# key/value pairs
# hash == object

# old way
user = {
  "first_name" => 'Alice',
  "last_name" => 'Cooper'
}
puts user
# only bracket notation no dot notation in ruby
puts user["first_name"]

# newer way (with symbols because it speeds things up)
user = {
  :first_name => 'Alice'
  :last_name => 'Cooper'
}

puts user
puts user[:first_name]

# modern way
user = {
  first_name: 'Alice'
  last_name: 'Cooper'
}

puts user
puts user[:first_name]

my_key = 'last_name'
puts user[my_key.to_sym]

```

## blocks / lamda
- A lamda is a named block
``` ruby
dogs = ['Scooby doo', 'Rex', 'clifford']

# this is a block (a do...end)
dogs.each do |dog|
  puts "I have a dog named #{dog}"
end

#lambda == named block (akin to a call back function)
dog_lamda = lambda { |dog| puts dog }
# same as above
dog_lamda = lambda do |dog| puts dog end

dogs.each &dog_lambda

def higher_order &anything
  anything.call 'Dioji'
end

higher_order &dog_lambda
```

## Classes
- making a class and creating a new instance
- @ is an instance variable
``` ruby
class Car
  def initialize color, make, year
    @color = color
    @make = make
    @year = year
  end

  # getter
  attr_reader :make
  # setter
  attr_writer :make

  # both in one
  attr_accessor :year, :make, :color

  # getter
  def color
    @color
  end

  # setter
  def color=new_color
    @color = new_color
  end
end

# const myCar = new Car()
my_car = Car.new 'red', 'Toyota', 1986

puts my_car.color
we can dot into objects (not hashes)

```







