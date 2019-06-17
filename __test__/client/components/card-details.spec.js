import React from 'react';
import CardDetails from '../../../src/client/components/card-details';
import { mount } from 'enzyme';

describe('Card Details', () => {
    const render = customProps => {
        const props = {
            ...customProps,
        }
        return mount(<CardDetails {...props} />);
    }
    it('Renders a a basic card details container', () => {
        const component = render();
        expect(
            component.find('[data-testid="card-details__container"]').exists()
        ).toBeTruthy();
    });
});
