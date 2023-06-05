//give the standard structure for a unit test
 describe('app.vue', () => {
    //test to obtain the favourite places from the local storage
    it('should get the favourite places from the local storage', () => {
        const wrapper = shallowMount(App)
        expect(wrapper.vm.favouritePlaces).toEqual([])
        }
    )

})
