//give the standard structure for a unit test
 describe('app.vue', () => {
    it('renders props.msg when passed', () => {
        let value = 5;
        value = value+2;
        if(value != 7){
            throw new Error("value should be 7");
        }

     })
})
