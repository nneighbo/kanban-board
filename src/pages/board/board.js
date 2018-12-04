import React, { Component } from 'react';
import { move, reorder } from '../../components/moveItems/';
import { getItemStyle, getListStyle } from '../../components/cardData';
import { FormBtn, Input } from '../../components/addCard';
import API from '../../utils/API'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

class Board extends Component {
  state = {
    title: '',
    task: '',
    tempId: 0,
    itemsOne: [],
    itemsTwo: [],
    itemsThree: [],
    itemsFour: [],
    itemsFive: [],
    itemsSix: [],
    itemsSeven: [],
    itemsEight: [],
    itemsNine: [],
    itemsTen: [],
    checked: '',
    contributors: [],
    visi4: 'hidden',
    visi5: 'hidden',
    visi6: 'hidden',
    visi7: 'hidden',
    visi8: 'hidden',
    visi9: 'hidden',
    visi10: 'hidden',
    rad4: { visibility: 'hidden' },
    rad5: { visibility: 'hidden' },
    rad6: { visibility: 'hidden' },
    rad7: { visibility: 'hidden' },
    rad8: { visibility: 'hidden' },
    rad9: { visibility: 'hidden' },
    rad10: { visibility: 'hidden' }
  };

  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state. This will be replaced with
   * with a system using optimum data for dynamic column names
   */
  id2List = {
    droppable: 'itemsOne',
    droppable2: 'itemsTwo',
    droppable3: 'itemsThree',
    droppable4: 'itemsFour',
    droppable5: 'itemsFive',
    droppable6: 'itemsSix',
    droppable7: 'itemsSeven',
    droppable8: 'itemsEight',
    droppable9: 'itemsNine',
    droppable10: 'itemsTen',
  };

  getList = id => this.state[this.id2List[id]];

  onDragEnd = result => {
    const { source, destination } = result;
    // dropped outside the list
    if (!destination) {
      return;
    }
    // if moved in same col
    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );


      let state = { items };

      // resets state for new list order if item is dropped in new position
      // if statements need to match droppable id and state of col
      if (source.droppableId === 'droppable') {
        state = { itemsOne: items };
      } else if (source.droppableId === 'droppable2') {
        state = { itemsTwo: items };
      } else if (source.droppableId === 'droppable3') {
        state = { itemsThree: items };
      } else if (source.droppableId === 'droppable4') {
        state = { itemsFour: items };
      } else if (source.droppableId === 'droppable5') {
        state = { itemsFive: items };
      } else if (source.droppableId === 'droppable6') {
        state = { itemsSix: items };
      } else if (source.droppableId === 'droppable7') {
        state = { itemsSeven: items };
      } else if (source.droppableId === 'droppable8') {
        state = { itemsEight: items };
      } else if (source.droppableId === 'droppable9') {
        state = { itemsNine: items };
      } else if (source.droppableId === 'droppable10') {
        state = { itemsTen: items };
      }

      this.setState(state);
    } else {
      // if moved cross col
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );
      // decides which col to drop the card into
      // if statements need to match droppable id and state of col
      if (result.droppable) {
        this.setState({
          itemsOne: result.droppable
        });
      }

      if (result.droppable2) {
        this.setState({
          itemsTwo: result.droppable2
        });
      }

      if (result.droppable3) {
        this.setState({
          itemsThree: result.droppable3
        });
      }

      if (result.droppable4) {
        this.setState({
          itemsFour: result.droppable4
        });
      }

      if (result.droppable5) {
        this.setState({
          itemsFive: result.droppable5
        });
      }

      if (result.droppable6) {
        this.setState({
          itemsSix: result.droppable6
        });
      }

      if (result.droppable7) {
        this.setState({
          itemsSeven: result.droppable7
        });
      }

      if (result.droppable8) {
        this.setState({
          itemsEight: result.droppable8
        });
      }

      if (result.droppable9) {
        this.setState({
          itemsNine: result.droppable9
        });
      }

      if (result.droppable10) {
        this.setState({
          itemsTen: result.droppable10
        });
      }
    }
  };

  handleInputChange = event => {
    // stores inputs for new cards
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    //creates and places new cards
    event.preventDefault();
    if (this.state.title && this.state.task) {
      let newTask = {
        id: this.state.tempId,
        header: this.state.title,
        content: this.state.task
      }
      if (this.state.checked === 'ideas') {
        this.setState({
          itemsOne: [ ...this.state.itemsOne, newTask ]
        })
      } else if (this.state.checked === 'In Progress') {
        this.setState({
          itemsTwo: [ ...this.state.itemsTwo, newTask ]
        })
      } else if (this.state.checked === 'Testing') {
        this.setState({
          itemsThree: [ ...this.state.itemsThree, newTask ]
        })
      } else if (this.state.checked === 'Testing2') {
        this.setState({
          itemsFour: [ ...this.state.itemsFour, newTask ]
        })
      } else if (this.state.checked === 'Testing3') {
        this.setState({
          itemsFive: [ ...this.state.itemsFive, newTask ]
        })
      } else if (this.state.checked === 'Testing4') {
        this.setState({
          itemsSix: [ ...this.state.itemsSix, newTask ]
        })
      } else if (this.state.checked === 'Testing5') {
        this.setState({
          itemsSeven: [ ...this.state.itemsSeven, newTask ]
        })
      } else if (this.state.checked === 'Testing6') {
        this.setState({
          itemsEight: [ ...this.state.itemsEight, newTask ]
        })
      } else if (this.state.checked === 'Testing7') {
        this.setState({
          itemsNine: [ ...this.state.itemsNine, newTask ]
        })
      } else if (this.state.checked === 'Testing8') {
        this.setState({
          itemsTen: [ ...this.state.itemsTen, newTask ]
        })
      }

      let newTempId = this.state.tempId + 1;
      this.setState({ tempId: newTempId })
    }
  };

  handleChange = (event) => {
    // for radio buttons
    this.setState({
      checked: event.target.value
    })
  }

  componentDidMount = () => {
    this.setState({
      contributors: "this.props.match.params.title"
    })

    API.renderBoard(2078)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => { console.log(err) })
  }

  addCol = (event) => {
    event.preventDefault();

    if(this.state.visi4 === 'hidden'){
      this.setState({ visi4: 'drop' })
      this.setState({ rad4: { visibility: 'visible' }})
      return
    } else if(this.state.visi5 === 'hidden'){
      this.setState({ visi5: 'drop' })
      this.setState({ rad5: { visibility: 'visible' }})
      return
    } else if(this.state.visi6 === 'hidden'){
      this.setState({ visi6: 'drop' })
      this.setState({ rad6: { visibility: 'visible' }})
      return
    } else if(this.state.visi7 === 'hidden'){
      this.setState({ visi7: 'drop' })
      this.setState({ rad7: { visibility: 'visible' }})
      return
    } else if(this.state.visi8 === 'hidden'){
      this.setState({ visi8: 'drop' })
      this.setState({ rad8: { visibility: 'visible' }})
      return
    } else if(this.state.visi9 === 'hidden'){
      this.setState({ visi9: 'drop' })
      this.setState({ rad9: { visibility: 'visible' }})
      return
    } else if(this.state.visi10 === 'hidden'){
      this.setState({ visi10: 'drop' })
      this.setState({ rad10: { visibility: 'visible' }})
      return
    }
  }

  render() {
    return (
      <div>
        <form className='form'>
          <Input className='input top-label'
            value={ this.state.title }
            onChange={ this.handleInputChange }
            name='title'
            placeholder='Title (required)'
          />
          <Input className='input sec-label'
            value={ this.state.task }
            onChange={ this.handleInputChange }
            name='task'
            placeholder='Task (required)'
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

          <label>
            <Input className='input rad-three'
              type='radio'
              value='Testing'
              checked={ this.state.checked === 'Testing' }
              onChange={ this.handleChange }
            /> <p className='radioBtn-three'>Testing</p>
          </label>

          <label style={ this.state.rad4 }>
            <Input className='input rad-four'
              type='radio'
              value='Testing2'
              checked={ this.state.checked === 'Testing2' }
              onChange={ this.handleChange }
            /> <p className='radioBtn-four'>Testing2</p>
          </label>

          <label style={ this.state.rad5 }>
            <Input className='input rad-five'
              type='radio'
              value='Testing3'
              checked={ this.state.checked === 'Testing3' }
              onChange={ this.handleChange }
            /> <p className='radioBtn-five'>Testing3</p>
          </label>

          <label style={ this.state.rad6 }>
            <Input className='input rad-six'
              type='radio'
              value='Testing4'
              checked={ this.state.checked === 'Testing4' }
              onChange={ this.handleChange }
            /> <p className='radioBtn-six'>Testing4</p>
          </label>

          <label style={ this.state.rad7 }>
            <Input className='input rad-seven'
              type='radio'
              value='Testing5'
              checked={ this.state.checked === 'Testing5' }
              onChange={ this.handleChange }
            /> <p className='radioBtn-seven'>Testing5</p>
          </label>

            <label style={ this.state.rad8 }>
            <Input className='input rad-eight'
              type='radio'
              value='Testing6'
              checked={ this.state.checked === 'Testing6' }
              onChange={ this.handleChange }
            /> <p className='radioBtn-eight'>Testing6</p>
          </label>

            <label style={ this.state.rad9 }>
            <Input className='input rad-nine'
              type='radio'
              value='Testing7'
              checked={ this.state.checked === 'Testing7' }
              onChange={ this.handleChange }
            /> <p className='radioBtn-nine'>Testing7</p>
          </label>

            <label style={ this.state.rad10 }>
            <Input className='input rad-ten'
              type='radio'
              value='Testing8'
              checked={ this.state.checked === 'Testing8' }
              onChange={ this.handleChange }
            /> <p className='radioBtn-ten'>Testing8</p>
          </label>

          <FormBtn className='input formbtn'
            disabled={ !(this.state.title && this.state.task) }
            onClick={ this.handleFormSubmit }
          >
            Submit
          </FormBtn>
        </form>
        <div>
          <form>
            <FormBtn className='input formbtn'
              onClick={ this.addCol }
            >
              Add a Column
          </FormBtn>
          </form>
        </div>
        <h1 className='boardName'>{ this.props.match.params.title }</h1>
        <h1 className='contributors'>Contributors: { this.state.contributors.length }</h1>
        <DragDropContext onDragEnd={ this.onDragEnd }>
          <div className='drop1'>
            <h1 className='one'>Ideas</h1>
            <Droppable droppableId='droppable'>
              {(provided, snapshot) => (
                <div
                  ref={  provided.innerRef }
                  style={ getListStyle(snapshot.isDraggingOver) }>
                  { this.state.itemsOne.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={ provided.innerRef }
                          { ...provided.draggableProps }
                          { ...provided.dragHandleProps }
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}>
                          <h3 className='cardId'> Id: { item.id } </h3>
                          <hr className='lineBreak' />
                          <h3 className='cardHeader'> { item.header } </h3>
                          <p className='cardContent'> { item.content } </p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  { provided.placeholder }
                </div>
              )}
            </Droppable>
          </div>
          <div className='drop2'>
            <h1 className='two'>In Progress</h1>
            <Droppable droppableId='droppable2'>
              {(provided, snapshot) => (
                <div
                  ref={ provided.innerRef }
                  style={ getListStyle(snapshot.isDraggingOver) }>
                  { this.state.itemsTwo.map((item, index) => (
                    <Draggable
                      key={ item.id }
                      draggableId={ item.id }
                      index={ index }>
                      {(provided, snapshot) => (
                        <div
                          ref={ provided.innerRef }
                          { ...provided.draggableProps }
                          { ...provided.dragHandleProps }
                          style={ getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}>
                          <h3 className='cardId'> Id: { item.id } </h3>
                          <hr className='lineBreak' />
                          <h3 className='cardHeader'> { item.header } </h3>
                          <p className='cardContent'> { item.content } </p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  { provided.placeholder }
                </div>
              )}
            </Droppable>
          </div>
          <div className='drop3'>
            <h1 className='three'>Testing</h1>
            <Droppable droppableId='droppable3'>
              {(provided, snapshot) => (
                <div
                  ref={ provided.innerRef }
                  style={ getListStyle(snapshot.isDraggingOver) }>
                  { this.state.itemsThree.map((item, index) => (
                    <Draggable
                      key={ item.id }
                      draggableId={ item.id }
                      index={ index }>
                      {(provided, snapshot) => (
                        <div
                          ref={ provided.innerRef }
                          { ...provided.draggableProps }
                          { ...provided.dragHandleProps }
                          style={ getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}>
                          <h3 className='cardId'> Id: { item.id } </h3>
                          <hr className='lineBreak' />
                          <h3 className='cardHeader'> { item.header } </h3>
                          <p className='cardContent'> { item.content } </p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  { provided.placeholder }
                </div>
              )}
            </Droppable>
          </div>
          <div className={ this.state.visi4 + '4' }>
            <h1 className='four'>Testing2</h1>
            <Droppable droppableId='droppable4'>
              {(provided, snapshot) => (
                <div
                  ref={ provided.innerRef }
                  style={ getListStyle(snapshot.isDraggingOver) }>
                  { this.state.itemsFour.map((item, index) => (
                    <Draggable
                      key={ item.id }
                      draggableId={ item.id }
                      index={ index }>
                      {(provided, snapshot) => (
                        <div
                          ref={ provided.innerRef }
                          { ...provided.draggableProps }
                          { ...provided.dragHandleProps }
                          style={ getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}>
                          <h3 className='cardId'> Id: { item.id } </h3>
                          <hr className='lineBreak' />
                          <h3 className='cardHeader'> { item.header } </h3>
                          <p className='cardContent'> { item.content } </p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  { provided.placeholder }
                </div>
              )}
            </Droppable>
          </div>
          <div className={ this.state.visi5 + '5' }>
            <h1 className='five'>Testing3</h1>
            <Droppable droppableId='droppable5'>
              {(provided, snapshot) => (
                <div
                  ref={ provided.innerRef }
                  style={ getListStyle(snapshot.isDraggingOver) }>
                  { this.state.itemsFive.map((item, index) => (
                    <Draggable
                      key={ item.id }
                      draggableId={ item.id }
                      index={ index }>
                      {(provided, snapshot) => (
                        <div
                          ref={ provided.innerRef }
                          { ...provided.draggableProps }
                          { ...provided.dragHandleProps }
                          style={ getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}>
                          <h3 className='cardId'> Id: { item.id } </h3>
                          <hr className='lineBreak' />
                          <h3 className='cardHeader'> { item.header } </h3>
                          <p className='cardContent'> { item.content } </p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  { provided.placeholder }
                </div>
              )}
            </Droppable>
          </div>
          <div className={ this.state.visi6 + '6' }>
            <h1 className='six'>Testing4</h1>
            <Droppable droppableId='droppable6'>
              {(provided, snapshot) => (
                <div
                  ref={ provided.innerRef }
                  style={ getListStyle(snapshot.isDraggingOver) }>
                  { this.state.itemsSix.map((item, index) => (
                    <Draggable
                      key={ item.id }
                      draggableId={ item.id }
                      index={ index }>
                      {(provided, snapshot) => (
                        <div
                          ref={ provided.innerRef }
                          { ...provided.draggableProps }
                          { ...provided.dragHandleProps }
                          style={ getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}>
                          <h3 className='cardId'> Id: { item.id } </h3>
                          <hr className='lineBreak' />
                          <h3 className='cardHeader'> { item.header } </h3>
                          <p className='cardContent'> { item.content } </p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  { provided.placeholder }
                </div>
              )}
            </Droppable>
          </div>
          <div className={ this.state.visi7 + '7' }>
            <h1 className='seven'>Testing5</h1>
            <Droppable droppableId='droppable7'>
              {(provided, snapshot) => (
                <div
                  ref={ provided.innerRef }
                  style={ getListStyle(snapshot.isDraggingOver) }>
                  { this.state.itemsSeven.map((item, index) => (
                    <Draggable
                      key={ item.id }
                      draggableId={ item.id }
                      index={ index }>
                      {(provided, snapshot) => (
                        <div
                          ref={ provided.innerRef }
                          { ...provided.draggableProps }
                          { ...provided.dragHandleProps }
                          style={ getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}>
                          <h3 className='cardId'> Id: { item.id } </h3>
                          <hr className='lineBreak' />
                          <h3 className='cardHeader'> { item.header } </h3>
                          <p className='cardContent'> { item.content } </p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  { provided.placeholder }
                </div>
              )}
            </Droppable>
          </div>
          <div className={ this.state.visi8 + '8' }>
            <h1 className='eight'>Testing6</h1>
            <Droppable droppableId='droppable8'>
              {(provided, snapshot) => (
                <div
                  ref={ provided.innerRef }
                  style={ getListStyle(snapshot.isDraggingOver) }>
                  { this.state.itemsEight.map((item, index) => (
                    <Draggable
                      key={ item.id }
                      draggableId={ item.id }
                      index={ index }>
                      {(provided, snapshot) => (
                        <div
                          ref={ provided.innerRef }
                          { ...provided.draggableProps }
                          { ...provided.dragHandleProps }
                          style={ getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}>
                          <h3 className='cardId'> Id: { item.id } </h3>
                          <hr className='lineBreak' />
                          <h3 className='cardHeader'> { item.header } </h3>
                          <p className='cardContent'> { item.content } </p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  { provided.placeholder }
                </div>
              )}
            </Droppable>
          </div>
          <div className={ this.state.visi9 + '9' }>
            <h1 className='nine'>Testing7</h1>
            <Droppable droppableId='droppable9'>
              {(provided, snapshot) => (
                <div
                  ref={ provided.innerRef }
                  style={ getListStyle(snapshot.isDraggingOver) }>
                  { this.state.itemsNine.map((item, index) => (
                    <Draggable
                      key={ item.id }
                      draggableId={ item.id }
                      index={ index }>
                      {(provided, snapshot) => (
                        <div
                          ref={ provided.innerRef }
                          { ...provided.draggableProps }
                          { ...provided.dragHandleProps }
                          style={ getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}>
                          <h3 className='cardId'> Id: { item.id } </h3>
                          <hr className='lineBreak' />
                          <h3 className='cardHeader'> { item.header } </h3>
                          <p className='cardContent'> { item.content } </p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  { provided.placeholder }
                </div>
              )}
            </Droppable>
          </div>
          <div className={ this.state.visi10 + '10' }>
            <h1 className='ten'>Testing8</h1>
            <Droppable droppableId='droppable10'>
              {(provided, snapshot) => (
                <div
                  ref={ provided.innerRef }
                  style={ getListStyle(snapshot.isDraggingOver) }>
                  { this.state.itemsTen.map((item, index) => (
                    <Draggable
                      key={ item.id }
                      draggableId={ item.id }
                      index={ index }>
                      {(provided, snapshot) => (
                        <div
                          ref={ provided.innerRef }
                          { ...provided.draggableProps }
                          { ...provided.dragHandleProps }
                          style={ getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}>
                          <h3 className='cardId'> Id: { item.id } </h3>
                          <hr className='lineBreak' />
                          <h3 className='cardHeader'> { item.header } </h3>
                          <p className='cardContent'> { item.content } </p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  { provided.placeholder }
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
    );
  }
}

export default Board;


