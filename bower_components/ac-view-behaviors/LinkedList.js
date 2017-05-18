var LinkedList = function () {
    this.first = null;
    this.last = null;
    this.length = 0 ;

    var LinkedListNode = function (value) {
        this.next = null;
        this.value = value;
    };

    this.clear = function () {
        this.length = 0 ;
        this.first = null ;
        this.last = null ;
    }
    this.push = function (value) {
        this.length ++ ;
        if (this.first === null) {
            this.first = new LinkedListNode(value);
            return this.first;
        }
        if (this.last === null) {
            this.last = new LinkedListNode(value);
            this.first.next = this.last;
            return this.last;
        }
        this.last.next = new LinkedListNode(value);
        this.last = this.last.next;
        this.last.next = null;
        return this.last;
    };
    this.popFirst = function () {
        if(this.first === null)
            return ;
        if(this.first.next !== null) {
            this.first = this.first.next ;
            this.length -- ;
        }
        else{
            this.first = null ;
            this.last = null ;
            this.length = 0 ;
        }
    };
} ;
