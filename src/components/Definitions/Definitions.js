import React from 'react';
import './Definitions.css';

export function Definitions({ word, meanings, category }) {
  return (
    <div className='meanings'>
      {word === '' ? (
        <span className='subTitle'>Start by typing a word in Search.</span>
      ) : (
        meanings.map((results) =>
          results.meanings.map((meaning) =>
            meaning.definitions.map((definition) => (
              <div
                className='singleDefinition'
                style={{ backgroundColor: 'white', color: 'black' }}
              >
                <b>{definition.definition}</b>
                <hr style={{ color: 'black', width: '100%' }} />
                {definition.example && (
                  <span>
                    <b>Example: </b>
                    {definition.example}
                  </span>
                )}
                {definition.synonyms && (
                  <span>
                    <b>Synonym: </b>
                    {definition.synonyms.map((synonym) => `${synonym}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
}
