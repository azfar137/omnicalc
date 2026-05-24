let input, base, height, width, length, a, b, radius, area;

input = prompt("Which shape's area you want to calculate?  1. Triangle 2. Rectangle 3. Parallelogram 4. square 5. Trapezium 6. Circle");

if (input==1) {
base = parseFloat(prompt('Enter the base:')); 
height = parseFloat(prompt('Enter the  height:'));
area = 0.5 * base * height;
document.write('The area of triangle is:'+ area
);
}

else if (input==2) {
 length = parseFloat(prompt('Enter the  length:'));
 width = parseFloat(prompt('Enter the  width:'));
 area = length * width;
 document.write('The area of rectangle is:'+ area
);
}

else if (input==3) {
 base = parseFloat(prompt('Enter the base:')); 
 height = parseFloat(prompt('Enter the  height:'));
 area = base * height;
 document.write('The area of parallelogram is:'+ area
);
}

else if (input==4) {
 length = parseFloat(prompt('Enter the  length:'));
 area = length**2;
 document.write('The area of square is:'+ area
);
}

else if (input==5) {
 a = parseFloat(prompt("Enter the length of the parallel side 'a':")); 
 b = parseFloat(prompt("Enter the  length of the parallel side 'b':"));
 height = parseFloat(prompt('Enter the height:'))
 area = 0.5 * (a + b) * height;
 document.write('The area of trapezium is:'+ area
);
}

else if (input==6) {
 radius = parseFloat(prompt('Enter the radius:'));
 area = 3.14159 * radius**2;
 document.write('The area of circle is:'+ area);
}

else {
 alert('Enter a valid number stupid');
}
