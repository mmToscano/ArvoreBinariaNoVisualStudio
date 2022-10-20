class No {
    constructor(Info){
        this.value = Info;
        this.left = null;
        this.rigth = null;
    }

    adicionarNo(Info){

        var novoNo = new No(Info);

        if(this.Raiz === null){
            this.Raiz = novoNo;
        }else{
            if(Info > this.Raiz.value){
                if(this.rigth == null){
                    this.right = novoNo;
                }else{
                    this.right.adicionarNo(novoNo.value);
                }
            }
        }
    }
}

class Arvore {
    constructor(){
        this.Raiz = null;
    }

    adicionarNo(Info){

        var novoNo = new No(Info);

        if(this.Raiz === null){
            this.Raiz = novoNo;
        }else{
            if(Info > this.Raiz.value){
                if(this.rigth == null){
                    this.right = novoNo;
                }else{
                    this.right.adicionarNo(novoNo.value);
                }
            }
        }
    }



}

let arvore = new Arvore();



function preOrder(tree){
    console.log(tree.value);

    tree.right && preOrder(tree.right);
    tree.left && preOrder(tree.left);
}
