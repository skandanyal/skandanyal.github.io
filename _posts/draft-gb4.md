---
layout: post
title: "Porting from Header-Only to Linked-Object Architecture"
data: 2026-02-17 
--- 

Glacier.ML began with a Simple Linear Regression model learnt from the NPTEL course "Applied 
Multivariate Statistical Modelling" offered by IIT Kgp. It included a simple `SLR` class 
implemented in a `.cpp` file, with a `.hpp` file only defining the members of the class, 
acting as the linker. Later, the contents of the .cpp file were moved into the .hpp file 
with the `inline` keyword inserted before defining each function. All done without any 
prior knowledge of what the term `Header-Only architecture` meant.

## Software architecture
The software architecture of a program or computing system is the structure or structures of 
the system, which comprise software components, the externally visible properties of those 
components, and the relationships among them.

The architecture is not the operational software. Rather, it is a representation that 
enables you to 
1. analyze the effectiveness of the design in meeting its stated requirements 
2. consider architectural alternatives at a stage when making design changes is still 
relatively easy
3. reduce the risks associated with the construction of the software.

Different architectures exist to solve different problems faced by softwares which serve different
purposes. In this article, we shall delve deep into the one followed by Glacier.ML and its pros 
and cons
