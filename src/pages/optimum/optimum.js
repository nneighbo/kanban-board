import React, { Component } from 'react';
import { FormBtn, Input } from '../../components/addCard';

class Optimum extends Component {
    state = {
        toSearch: false,
        checked: '',
        title: ''
    };

    handleInputChange = event => {
        let name = event.target.name
        let value = event.target.value

        this.setState({
            [name]: value
        });
    };

    handleChange = (event) => {
        this.setState({
          checked: event.target.value
        })
      }

    handleFormSubmit = event => {
        event.preventDefault();
        this.props.history.push(`/board/${this.state.title}`)
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <form className='form'>
                    <Input className='input top-label'
                        value={ this.state.title }
                        onChange={ this.handleInputChange }
                        name='title'
                        placeholder='Title (required)'
                    />
                    <label>
                        <Input className='input rad-one'
                            type='radio'
                            value='ideas'
                            checked={ this.state.checked === 'ideas' }
                            onChange={ this.handleChange }
                        /> <p className='radioBtn-one'>Ideas</p>
                    </label>

                    <label>
                        <Input className='input rad-two'
                            type='radio'
                            value='In Progress'
                            checked={ this.state.checked === 'In Progress' }
                            onChange={ this.handleChange }
                        /> <p className='radioBtn-two'>In Progress</p>
                    </label>

                    <FormBtn className='input formbtn'
                        disabled={ !(this.state.title) }
                        onClick={ this.handleFormSubmit }
                    >
                        New Board
                    </FormBtn>
                </form>
            </div>
        )
    }
}

export default Optimum;
