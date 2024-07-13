const App = {
    data() {
        return {
            title: 'Title',
            btnTitle: 'Test Button',
            fontSize: false,
            border: false,
            bgColor: 'yellow',
            range: 20,

            // HomeWork
            titleHW: "Hello 1T Sprint!",
            activeColorHW: 'green',
            fontSizeHW: 50,
            checkedName: [],
            nick: '',
            selected: '',
        }
    }, 
    // вычисляемые св-ва, увеличивает производительность
    computed: {
        getCss() {
            return {
                'large': this.fontSize,
                'border': this.border,
            }
        },
        style() {
            return {
                'background': this.bgColor, 
                'margin-left': this.range + '%',
            }
        },

        // HomeWork
        styleHW() {
            return {
                'color': this.activeColorHW,
                'font-size': this.fontSizeHW + 'px',
            }
        },
        
    },
    methods: {
        changeTitle() {
            this.title = 'New Title'
            // console.log(this.$refs)
            this.$refs.heading.style.color = 'red'
        },

        // HomeWork
        addNick() {
            if (this.nick != '') {
                this.checkedName.push(this.nick)
                this.nick = ''
            }
        }
    },
}

Vue.createApp(App).mount('#app')