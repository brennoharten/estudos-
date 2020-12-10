class Transformations {

    reflection2Dy(a) {
        let la = new LinearAlgebra();
        let c = new Matrix(3, 3, [-1, 0, 0, 0, 1, 0, 0, 0, 1]);
        let b = new Vector(3, [a.get(1), a.get(2), 1]);

        return la.dot(c, b)
    }

    reflection2Dx(a) {
        let la = new LinearAlgebra();
        let c = new Matrix(3, 3, [1, 0, 0, 0, -1, 0, 0, 0, 1]);
        let b = new Vector(3, [a.get(1), a.get(2), 1]);

        return la.dot(c, b)
    }

    reflection3Dy(a) {
        let la = new LinearAlgebra();
        let c = new Matrix(4, 4, [-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        let b = new Vector(4, [a.get(1), a.get(2), a.get(3), 1]);

        return la.dot(c, b)
    }

    reflection3Dx(a) {
        let la = new LinearAlgebra();
        let c = new Matrix(4, 4, [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        let b = new Vector(4, [a.get(1), a.get(2), a.get(3), 1]);

        return la.dot(c, b)
    }

    projection2Dx(a){
        let la = new LinearAlgebra();
        let c = new Matrix(3, 3, [1, 0, 0, 0, 0, 0, 0, 0, 1]);
        let b = new Vector(3, [a.get(1), a.get(2), 1]);

        return la.dot(c, b)
    }

    projection2Dy(a){
        let la = new LinearAlgebra();
        let c = new Matrix(3, 3, [0, 0, 0, 0, 1, 0, 0, 0, 1]);
        let b = new Vector(3, [a.get(1), a.get(2), 1]);

        return la.dot(c, b)
    }

    projection3Dx(a) {
        let la = new LinearAlgebra();
        let c = new Matrix(4, 4, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        let b = new Vector(4, [a.get(1), a.get(2), a.get(3), 1]);

        return la.dot(c, b)
    }

    projection3Dy(a) {
        let la = new LinearAlgebra();
        let c = new Matrix(4, 4, [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        let b = new Vector(4, [a.get(1), a.get(2), a.get(3), 1]);

        return la.dot(c, b)
    }

    rotation2D(a, x) {
        let la = new LinearAlgebra();
        let c = new Matrix(3, 3, [Math.cos(x), Math.sin(x) * -1, 0, Math.sin(x), Math.cos(x), 0, 0, 0, 1]);
        let b = new Vector(3, [a.get(1), a.get(2), 1]);

        return la.dot(c, b)
    }
    
    rotation3Dx(a, x) {
        let la = new LinearAlgebra();
        let c = new Matrix(4, 4, [1, 0, 0, 0, Math.cos(x), Math.sin(x) * -1, 0, 0, Math.sin(x), Math.cos(x), 0, 0, 0, 0, 0, 1]);
        let b = new Vector(4, [a.get(1), a.get(2), a.get(3), 1]);

        return la.dot(c, b)

    }

    rotation3Dy(a, x) {
        let la = new LinearAlgebra();
        let c = new Matrix(4, 4, [Math.cos(x), Math.sin(x) * -1, 0, 0, 0, 1, 0, 0, Math.sin(x), Math.cos(x), 0, 0, 0, 0, 0, 1]);
        let b = new Vector(4, [a.get(1), a.get(2), a.get(3), 1]);

        return la.dot(c, b)

    }

    rotation3Dz(a, x) {
        let la = new LinearAlgebra();
        let c = new Matrix(4, 4, [Math.cos(x), Math.sin(x) * -1, 0, 0, Math.sin(x), Math.cos(x), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        let b = new Vector(4, [a.get(1), a.get(2), a.get(3), 1]);

        return la.dot(c, b)

    }

    scale2Dx(a, k) {
        let la = new LinearAlgebra();
        let c = new Matrix(3, 3, [k, 0, 0, 0, 1, 0, 0, 0, 1]);
        let b = new Vector(3, [a.get(1), a.get(2), 1]);

        return la.dot(c, b)
    }
    
    scale2Dy(a, k) {
        let la = new LinearAlgebra();
        let c = new Matrix(3, 3, [1, 0, 0, 0, k, 0, 0, 0, 1]);
        let b = new Vector(3, [a.get(1), a.get(2), 1]);

        return la.dot(c, b)
    }
    
    scale3Dx(a, k) {
        let la = new LinearAlgebra();
        let c = new Matrix(4, 4, [k, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        let b = new Vector(4, [a.get(1), a.get(2), a.get(3), 1]);

        return la.dot(c, b)
    }
    
    scale3Dy(a, k) {
        let la = new LinearAlgebra();
        let c = new Matrix(4, 4, [1, 0, 0, 0, 0, k, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        let b = new Vector(4, [a.get(1), a.get(2), a.get(3), 1]);

        return la.dot(c, b)
    }
    
    scale3Dz(a, k) {
        let la = new LinearAlgebra();
        let c = new Matrix(4, 4, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, k, 0, 0, 0, 0, 1]);
        let b = new Vector(4, [a.get(1), a.get(2), a.get(3), 1]);

        return la.dot(c, b)
    }

    shearingX(a) {
        let la = new LinearAlgebra();
        let c = new Matrix(3, 3, [1, k, 0, 0, 1, 0, 0, 0, 1]);
        let b = new Vector(3, [a.get(1), a.get(2), 1]);

        return la.dot(c, b)
    }

    shearingY(a) {
        let la = new LinearAlgebra();
        let c = new Matrix(3, 3, [1, 0, 0, k, 1, 0, 0, 0, 1]);
        let b = new Vector(3, [a.get(1), a.get(2), 1]);

        return la.dot(c, b)
    }

    translate2D(a, dx, dy) {
        let la = new LinearAlgebra();
        let c = new Matrix(3, 3, [1, 0, dx, 0, 1, dy, 0, 0, 1]);
        let b = new Vector(3, [a.get(1), a.get(2), 1]);

        return la.dot(c, b)

    }
    
    
    translate3D(vector, dx, dy, dz) {
        let la = new LinearAlgebra();
        let c = new Matrix(4, 4, [1, 0, 0, dx, 0, 1, 0, dy, 0, 0, 1, dz, 0, 0, 0, 1]);
        let b = new Vector(4, [vector.get(1), vector.get(2), vector.get(3), 1]);

        return la.dot(c, b)
    }

}