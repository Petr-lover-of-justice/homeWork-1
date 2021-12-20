// class decision
import React from "react"
class ProfileClass extends React.Component {//toLocaleDateString()
    constructor(props) {
        super(props);
        this.state = { names: ["Вася"] }  // сдесь должн быть длинный список имен чтоб фильтровать пропс и показывать только имена, но пока одного хватит

        this.options =
        {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        this.returns = this.props.name.split(" ").filter(nameCurrentFiltr => !!this.state.names.includes(nameCurrentFiltr));// сама фильтрация 
        this.returns1 = this.props.registredAt.toLocaleDateString("ru", this.options)
    }
    render() {
        return (
            <div>
                <div>Привет,<b> {this.returns}</b></div>
                <div> Дата регистрации: {this.returns1}
                </div>
            </div>
        );
    }
}
export default ProfileClass;
