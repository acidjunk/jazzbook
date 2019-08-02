import React from 'react';
import {getArpeggioNotes, getSimpleNoteName} from '../utility/musicTheory.js';

export default (props) => {
    const getArpeggioMarkup = (chord) => {
        var notes = getArpeggioNotes(chord.note, chord.chordType)

        return <div className='arpeggio-display'>
            {notes.map((note) => {
                return <span className='arpeggio-note'>{note}</span>
            })}
        </div>;
    }

    const getChordsMarkup = () => {
        return props.measure.chords.map((chord) => {
            var displayWidth = chord.beats/props.beatsPerMeasure * 100 + '%';

            return <div className="chord-display" style={{'width': displayWidth}}>
            <span>{getSimpleNoteName(chord.note)}</span>
            <span>{chord.chordType}</span>

            {/* {getArpeggioMarkup(chord)} */}
        </div>
        });
    }

    const getActiveClass = () => props.activeMeasure ? 'active-measure' : '';

    return <div className={"measure simple-border " + getActiveClass()}>
        <button className='delete-measure-button app-button' onClick={() => props.deleteMeasure(props.index)}>X</button>
        <div className="measure-chords-wrapper">
            {getChordsMarkup()}
        </div>
        
    </div>
}