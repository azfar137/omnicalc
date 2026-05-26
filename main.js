let choice = prompt('Which one do you want to calculate? 1. Area of 2D shapes 2. Surface area of 3D shapes 3. volume 4. Temperature');

// area calculation section
if (choice==1) {
 let input, base, height, width, length, a, b, d1, d2, n, radius, theta, area;

 input = prompt("Which shape's area you want to calculate?  1. Triangle 2. Rectangle 3. Parallelogram 4. square 5. Trapezium 6. Rhombus 7. Circle 8. Sector of a circle 9. Ellipse 10. Polygon");

 if (input==1) {
 base = parseFloat(prompt('Enter the base:')); 
 height = parseFloat(prompt('Enter the  height:'));
 area = 0.5 * base * height;
 document.write('The area of triangle is:'+ area);
 }

 else if (input==2) {
 length = parseFloat(prompt('Enter the  length:'));
 width = parseFloat(prompt('Enter the  width:'));
 area = length * width;
 document.write('The area of rectangle is:'+ area);
 }

 else if (input==3) {
 base = parseFloat(prompt('Enter the base:')); 
 height = parseFloat(prompt('Enter the  height:'));
 area = base * height;
 document.write('The area of parallelogram is:'+ area);
 }

 else if (input==4) {
 length = parseFloat(prompt('Enter the  length:'));
 area = length**2;
 document.write('The area of square is:'+ area);
 }

 else if (input==5) {
 a = parseFloat(prompt("Enter the length of the parallel side 'a':")); 
 b = parseFloat(prompt("Enter the  length of the parallel side 'b':"));
 height = parseFloat(prompt('Enter the height:'))
 area = 0.5 * (a + b) * height;
 document.write('The area of trapezium is:'+ area);
 }
 
 else if (input==6) {
  d1 = parseFloat(prompt("Enter the first diagonal 'd₁':"));
  d2 = parseFloat(prompt("Enter the second diagonal 'd₂':"));
  area = 0.5 * d1 * d2;
  document.write('The area of rhombus is:'+area);
 }

 else if (input==7) {
 radius = parseFloat(prompt('Enter the radius:'));
 area = Math.PI * radius**2;
 document.write('The area of circle is:'+ area);
 }
 
 else if (input==8) {
  theta = parseFloat(prompt('Enter the central angle:'));
  radius = parseFloat(prompt('Enter the radius:'));
  area = (theta/360) * Math.PI * radius**2;
  document.write('The area of sector of circle is:'+ area);
 }
 
 else if (input==9) {
  a = parseFloat(prompt("Enter the semi-major axis 'a':"));
  b = parseFloat(prompt("Enter the semi-minor axis 'b':"));
  area = Math.PI * a * b;
  document.write('The area of ellipse is:'+ area);
 }
 
 else if (input==10) {
  n = parseFloat(prompt('Enter the number of the side of polygon:'));
  a = parseFloat(prompt('Enter the length of one side:'));
  area = ((n * a**2) / 4) * (1 / Math.tan(Math.PI / n));
  document.write('The area of polygon is:'+area);
 }

 else {
  alert('Enter a valid number stupid');
 }
}

//surface area calculation section
else if (choice==2) {
 let input, a, l, h, w, r, R, surfaceArea;
 
 input = prompt("Which shape's surface area you want to calculate?  1. Cube 2. Cuboid 3. Sphere 4. Hemisphere 5. Cylinder 6. Cone 7. Frustum of cone 8. Regular tetrahedron");
 
 if (input==1) {
  a = parseFloat(prompt('Enter the length of one side:'));
  surfaceArea = 6 * a**2;
  document.write('The surface area of cube is:'+surfaceArea);
 }
 
 else if (input==2) {
  l = parseFloat(prompt('Enter the length:'));
  w = parseFloat(prompt('Enter the width:'));
  h = parseFloat(prompt('Enter the height:'));
  surfaceArea = 2*((l*w)+(l*h)+(w*h));
  document.write('The surface area of cuboid is:'+surfaceArea);
 }
 
 else if (input==3) {
  r = parseFloat(prompt('Enter the radius of sphere:'));
  surfaceArea = 4*Math.PI*r**2;
  document.write('The surface area of sphere is:'+surfaceArea);
 }
 
 else if (input==4) {
  r = parseFloat(prompt('Enter the radius of hemisphere:'));
  surfaceArea = 3*Math.PI*r**2;
  document.write('The surface area of hemisphere is:'+surfaceArea);
 }
 
 else if (input==5) {
  r = parseFloat(prompt('Enter the radius of the base of cylinder:'));
  h = parseFloat(prompt('Enter the height of cylinder:'));
  surfaceArea = 2*Math.PI*r(r+h);
  document.write('The surface area of cylinder is:'+surfaceArea);
 }
 
 else if (input==6) {
  r = parseFloat(prompt('Enter the radius:'));
  l = parseFloat(prompt('Enter the slant height of cone:'));
  surfaceArea = Math.PI*r(r+l);
  document.write('The surface area of cone is:'+surfaceArea);
 }
 
 else if (input==7) {
  R = parseFloat(prompt('Enter the larger radius:'));
  r = parseFloat(prompt('Enter the smaller radius:'));
  l = parseFloat(prompt('Enter the slant height:'));
  surfaceArea = (Math.PI*(R+r)*l)+(Math.PI*(R**2))+(Math.PI*(r**2));
  document.write('The surface area of the Frustum of cone is:'+surfaceArea);
 }
 
 else if (input==8) {
  a = parseFloat(prompt('Enter the length of one side:'));
  surfaceArea = Math.sqrt(3)*(a**2);
  document.write('The surface area of rectangular tetrahedron is'+surfaceArea);
 }

 else {
  alert('Enter a valid number stupid');
 }
}

//volume calculation section 
else if (choice==3) {
 let input, length, width, height, base, baseArea,  radius, volume;
 
 input = prompt("Which shape's volume you want to calculate? 1. Cube 2. Cuboid 3. Cone 4. Cylinder 5. Sphere 6. Hemisphere 7. Prism 8. Pyramid");
 
 if (input==1) {
  length = parseFloat(prompt('Enter the length:'));
  volume = length**3;
  document.write('The volume of cube is:'+volume);
 }
 
 else if (input==2) {
  length = parseFloat(prompt('Enter the length:'));
  width = parseFloat(prompt('Enter the width:'));
  height = parseFloat(prompt('Enter the height:'));
  volume = length * width * height;
  document.write('The volume of cuboid is:'+volume);
 }
 
 else if (input==3) {
  radius = parseFloat(prompt('Enter the radius of the base:'));
  height = parseFloat(prompt('Enter the height:'));
  volume = (1/3) * Math.PI * (radius**2) * height;
  document.write('The volume of cone is:'+volume);
 }
 
 else if (input==4) {
  radius = parseFloat(prompt('Enter the radius of the base:'));
  height = parseFloat(prompt('Enter the height:'));
  volume = Math.PI * (radius**2) * height;
  document.write('The volume of cylinder is:'+volume);
  }
  
  else if (input==5) {
   radius = parseFloat(prompt('Enter the radius:'));
   volume = (4/3)*Math.PI*(radius**3);
   document.write('The volume of sphere is:'+volume);
  }
  
  else if (input==6) {
   radius = parseFloat(prompt('Enter the radius:'));
   volume = (2/3)*Math.PI*(radius**3);
   document.write('The volume of hemisphere is:'+volume);
  }
  
  else if (input==7) {
   baseArea = parseFloat(prompt('Enter the base area of prism:'));
   height = parseFloat(prompt('Enter the height of prism:'));
   volume = baseArea * height;
   document.write('The volume of prism is:'+volume);
  }
  
  else if (input==8) {
   baseArea = parseFloat(prompt('Enter the base area of pyramid:'));
   height = parseFloat(prompt('Enter the height of pyramid:'));
   volume = (1/3) * baseArea * height;
   document.write('The volume of pyramid is:'+volume);
  }
  
  else {
   alert('Enter a valid number stupid');
  }
}

//temperature calculation section
else if (choice==4) {
 let tempInput, tempC, tempF, tempK;
 
  tempInput = prompt('Choose which you want to calculate: 1. Fahrenheit to Celsius 2. celsius to Fahrenheit 3.Celsius to Kelvin 4. Kelvin to Celsius 5.Fahrenheit to Kelvin 6. Kelvin to Fahrenheit');

 if (tempInput==1) {
  tempF = parseFloat(prompt('Enter the temperature in Fahrenheit:'));
  tempC = (tempF-32)*(5/9);
  document.write('Temperature in Celsius: '+ tempC + '°C');
}

 else if (tempInput==2) {
  tempC = parseFloat(prompt('Enter the temperature in Celsius:'));
  tempF = ((tempC*9)/5)+32;
  document.write('Temperature in Fahrenheit: ' + tempF + '°F');
 }
 
 else if (tempInput==3) {
  tempC = parseFloat(prompt('Enter the temperature in Celsius:'));
  tempK = tempC + 273.15;
  document.write('Temperature in Kelvin:'+ tempK);
 }
 
 else if (tempInput==4) {
  tempK = parseFloat(prompt('Enter the temperature in Kelvin:'));
  tempC = tempK - 273.15;
  document.write('Temperature in Celsius:'+tempC+'°C');
 }
 
 else if (tempInput==5) {
  tempF = parseFloat(prompt('Enter the temperature in Fahrenheit:'));
  tempK = ((tempF-32)*(5/9) + 273.15);
  document.write('Temperature in Kelvin: ' + tempK);
 }
 
 else if (tempInput==6) {
  tempK = parseFloat(prompt('Enter the temperature in Kelvin:'));
  tempF = (((tempK - 273.15) * 9) / 5) + 32;
  document.write('Temperature in Fahrenheit: ' + tempF + '°F');
 }
 
 else {
   alert('Enter a valid number stupid');
 }
}

//wrong choice selection alert
else {
 alert('Enter a valid number stupid');
}
