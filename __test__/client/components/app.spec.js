import React from 'react';
import App from '../../../src/client/components/app';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

describe('App', () => {
    const render = customProps => {
        const props = {
            // Default props
            ...customProps,
        }
        return mount(<App {...props}/>);
    }

    it('renders the app as expected', () => {
        const component = renderer.create(
            <App />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('successfully renders the app', () => {
        const renderedApp = render();
        expect(
            renderedApp.find('[data-testid="app-title"]').text(),
        ).toBe('Hello Moonpig!');
    });

    it('Assigns an object to the prop axiosInstance when passed', () => {
        const axiosInstanceMock = jest.fn();
        const renderedApp = render({ axiosInstance: axiosInstanceMock});
        expect(renderedApp.props().axiosInstance).toEqual(axiosInstanceMock);
    });
});

