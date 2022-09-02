import React from 'react';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi state
        this.state = {
            title: '',
            body: '',
            charLimit: 50
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        if (this.state.title.length >= this.state.charLimit) {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    title: event.target.value.slice(0, this.state.charLimit)
                }
            })
        } else {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    title: event.target.value,
                }
            })
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState(() => {
            return {
                title: '',
                body: ''
            }
        });
    }

    render() {
        return (
            <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                <h2>Buat Catatan</h2>
                <div className="note-input__title__char-limit">Sisa karakter {this.state.charLimit - this.state.title.length}</div>
                <input className="note-input__title" type="text" placeholder="Judul catatan..." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                <textarea className="note-input__body" placeholder="Tulis catatatan disini..." value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                <button type="submit">Simpan</button>
            </form>
        )
    }
}

export default NoteInput;