/*
* This program is the triangle class.
*
* @author Abdul Basit
* @version 1.0
* @since   2021-12-25
*/

export class Triangle {

    // declared private data member for side lengths
    // of the triangle
    private sideAlen: number;
    private sideBlen: number;
    private sideClen: number;

    // defined constructor for the Triangle class
    constructor(len1: number, len2: number, len3: number){
        this.sideAlen = len1;
        this.sideBlen = len2;
        this.sideClen = len3;

        // checking if the triangle is a valid triangle or not.
        if(!this.IsTriangleValid()){
            console
        }
    }

    // defined a protected member function
    // it checks whether the triangle entered by
    // user is a valid triangle or not.
    protected IsTriangleValid(){
        let len1 = this.sideAlen;
        let len2 = this.sideBlen;
        let len3 = this.sideClen;

        // if sum of any two sides is smaller than the third side then the triangle is not valid.
        // otherwise it is a valid triangle
        if(((len1 + len2)<=len3) || ((len2 + len3)<=len1) || ((len3 + len1)<=len2)){
            return false;
        }
        return true;
    }

    // this function returns the semi perimeter of the triangle
    public GetSemiPerimeter(){
        return 0.5*this.GetPerimeter();
    }

    // this function returns the area of the triangle
    public GetArea(){
        let sp = this.GetSemiPerimeter();
        let a = this.sideAlen;
        let b = this.sideBlen;
        let c = this.sideClen;

        // using Heron's formula to compute the area of the circle
        return (Math.sqrt(sp*(sp-a)*(sp-b)*(sp-c)));
    }

    // this function computes the angle A of the triangle
    public GetAngleA(){
        let a = this.sideAlen;
        let b = this.sideBlen;
        let c = this.sideClen;

        // using law of cosines to compute the angle of the triangle
        return (180.0/Math.PI)*Math.acos(((b*b) + (c*c) - (a*a))/(2*b*c));
    }

    // this function computes the angle B of the triangle
    public GetAngleB(){
        let a = this.sideAlen;
        let b = this.sideBlen;
        let c = this.sideClen;

        // using law of cosines to compute the angle of the triangle
        return (180.0/Math.PI)*Math.acos(((c*c) + (a*a) - (b*b))/(2*c*a));
    }

    // this function computes the angle C of the triangle
    public GetAngleC(){
        let a = this.sideAlen;
        let b = this.sideBlen;
        let c = this.sideClen;

        // using law of cosines to compute the angle of the triangle
        return (180.0/Math.PI)*Math.acos(((a*a) + (b*b) - (c*c))/(2*a*b));
    }

    // this function returns the name of the triangle
    public GetName(){
        let a = this.sideAlen;
        let b = this.sideBlen;
        let c = this.sideClen;

        let A = this.GetAngleA();
        let B = this.GetAngleB();
        let C = this.GetAngleC();

        let name = "";

        // if all angles are smaller than 90 degrees then
        // the triangle is acute triangle
        if(A<90 && B<90 && C<90){
            name += "Acute ";
        }

        // if one of the angles is 90 degrees, then
        // the triangle is right triangle
        else if(A == 90 || B == 90 || C == 90){
            name += "Right ";
        }

        // if one angle is greater than 90 degrees then
        // the triangle is obtuse triangle
        else if(A>90 || B>90 || C>90){
            name += "Obtuse ";
        }

        // if all the sides of the triangle are equal
        // then the triangle is Equilateral
        if(a == b && b == c){
            name += "Equilateral";
        }

        // if only two sides of the triangle are
        // equal, then the triangle is Isoceles
        else if(a==b || b==c || c==a){
            name += "Isoceles";
        }

        // if none of the sides are equal to each other,
        // then the triangle is Scalene
        else if(a!=b && b!=c && c!=a){
            name += "Scalene";
        }

        // return name of the triangle
        return name;
    }

    // this function returns the perimeter of the triangle
    public GetPerimeter(){
        return this.sideAlen + this.sideBlen + this.sideClen;
    }
}
