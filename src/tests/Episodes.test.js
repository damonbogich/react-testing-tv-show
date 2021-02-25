import React from 'react';
import {queryAllByTestId, queryByText, render} from '@testing-library/react';
import Episodes from '../components/Episodes';


const episodes = [
    {id: 553946, url: "https://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers", name: "Chapter One: The Vanishing of Will Byers", season: 1, number: 1},
    {id: 578663, url: "https://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street", name: "Chapter Two: The Weirdo on Maple Street", season: 1, number: 2}
];

test('episodes renders correctly', () => {
    const {getByText, queryByText, rerender, queryAllByTestId} = render(
        <Episodes episodes={[]}/>
    )
    expect(queryByText(/minutes/i)).toBeNull();
    expect(queryAllByTestId(/episodes/i)).toStrictEqual([]);

    rerender(<Episodes episodes={episodes}/>)
    expect(queryAllByTestId(/episodes/i)).toHaveLength(2);
})