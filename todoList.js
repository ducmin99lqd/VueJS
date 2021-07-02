var App = new Vue({
    el: '#app',
    data: {
        resultSearch: "",
        check: true,
        name: "",
        phone: null,
        updateContact: {
            selectedIndex: null,
            name: "",
            phone: null,
        },
        updatePhone: null,
        contacts: [],
        image: '',
        contactFilter: []
    },
    methods: {
        storeTodo: function () {
            var info = { name: this.name, phone: this.phone };
            this.contacts.push(info);
            this.name = "";
            this.phone = null;
        },
        editItem: function (index, contact) {
            this.check = false;
            this.updateContact.selectedIndex = index;
            this.updateContact.name = contact.name;
            this.updateContact.phone = contact.phone;
        },
        removeItem: function (index) {
            this.contacts.splice(index, 1);
        },
        updateItem: function (name, phone) {
            var update = { name, phone };
            this.contacts.splice(this.updateContact.selectedIndex, 1, update);
            this.check = true;
        },
        //upload image
        doThat: function () {
           
        }

    }
})