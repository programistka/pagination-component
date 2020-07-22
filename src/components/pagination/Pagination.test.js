import React from 'react';
import { shallow } from 'enzyme';

import Pagination from './Pagination';
import PaginationItem from './PaginationItem';
import NavigationItem from './NavigationItem';

let wrapperWithMoreThan3Pages;

beforeAll(() => {
    wrapperWithMoreThan3Pages = shallow(
        <Pagination
            itemsCount={81}
            itemsPerPage={10}
            currentPage={1}
            onChange={() => {}}
        />
    );
});

describe('<Pagination> rendering', () => {
    it('renders without crashing', () => {
        expect(wrapperWithMoreThan3Pages).toBeDefined();
    });

    it('renders <<(enabled)[3][4][5]>>(enabled) for 81 elements - 10 items per page, 9 pages; when current page equals 4', () => {
        wrapperWithMoreThan3Pages.setProps({ currentPage: 4 });

        paginationItemsAreCorrectlyRendered(wrapperWithMoreThan3Pages, 3);
        navigationItemsAreCorrectlyRendered(wrapperWithMoreThan3Pages);
        previousButtonIsEnabled();
        nextButtonIsEnabled();
    });

    it('current page is set as active', () => {
        wrapperWithMoreThan3Pages.setProps({ currentPage: 4 });

        currentPageIsSetToActive();
    });

    it('renders <<(disabled)[1][2][3]>>(enabled) for 81 elements - 10 items per page, 9 pages; when current page equals 1', () => {
        wrapperWithMoreThan3Pages.setProps({ currentPage: 1 });

        paginationItemsAreCorrectlyRendered(wrapperWithMoreThan3Pages, 3);
        navigationItemsAreCorrectlyRendered(wrapperWithMoreThan3Pages);
        previousButtonIsDisabled();
        nextButtonIsEnabled();
    });

    it('renders <<(enabled)[1][2][3]>>(enabled) for 81 elements - 10 items per page, 9 pages; when current page equals 2', () => {
        wrapperWithMoreThan3Pages.setProps({ currentPage: 2 });

        paginationItemsAreCorrectlyRendered(wrapperWithMoreThan3Pages, 3);
        navigationItemsAreCorrectlyRendered(wrapperWithMoreThan3Pages);
        previousButtonIsEnabled();
        nextButtonIsEnabled();
    });

    it('renders <<(enabled)[7][8][9]>>(enabled) for 81 elements - 10 items per page, 9 pages; when current page equals 8', () => {
        wrapperWithMoreThan3Pages.setProps({ currentPage: 8 });

        paginationItemsAreCorrectlyRendered(wrapperWithMoreThan3Pages, 3);
        navigationItemsAreCorrectlyRendered(wrapperWithMoreThan3Pages);
        previousButtonIsEnabled();
        nextButtonIsEnabled();
    });

    it('renders <<(enabled)[7][8][9]>>(disabled) for 81 elements - 10 items per page, 9 pages; when current page equals 9', () => {
        wrapperWithMoreThan3Pages.setProps({ currentPage: 9 });

        paginationItemsAreCorrectlyRendered(wrapperWithMoreThan3Pages, 3);
        navigationItemsAreCorrectlyRendered(wrapperWithMoreThan3Pages);
        previousButtonIsEnabled();
        nextButtonIsDisabled();
    });

    it('renders <<(disabled)[1][2][3]>>(enabled) for 81 elements - 30 items per page, 3 pages; when current page equals to 1', () => {
        const wrapperWithExactly3Pages = shallow(
            <Pagination
                itemsCount={81}
                itemsPerPage={30}
                currentPage={1}
                onChange={() => {}}
            />
        );

        paginationItemsAreCorrectlyRendered(wrapperWithExactly3Pages, 3);
        navigationItemsAreCorrectlyRendered(wrapperWithExactly3Pages);
    });

    it('renders <<(enabled)[1][2][3]>>(enabled) for 81 elements - 30 items per page, 3 pages; when current page equals to 2', () => {
        const wrapperWithExactly3Pages = shallow(
            <Pagination
                itemsCount={81}
                itemsPerPage={30}
                currentPage={2}
                onChange={() => {}}
            />
        );

        paginationItemsAreCorrectlyRendered(wrapperWithExactly3Pages, 3);
        navigationItemsAreCorrectlyRendered(wrapperWithExactly3Pages);
    });

    it('renders <<(disabled)[1][2]>>(enabled) for 81 elements - 50 items per page, 2 pages; when current page equals to 1', () => {
        const wrapperWithExactly2Pages = shallow(
            <Pagination
                itemsCount={81}
                itemsPerPage={50}
                currentPage={1}
                onChange={() => {}}
            />
        );

        paginationItemsAreCorrectlyRendered(wrapperWithExactly2Pages, 2);
        navigationItemsAreCorrectlyRendered(wrapperWithExactly2Pages);
    });

    it('renders <<(enabled)[1][2]>>(disabled) for 81 elements - 50 items per page, 2 pages; when current page equals to 2', () => {
        const wrapperWithExactly2Pages = shallow(
            <Pagination
                itemsCount={81}
                itemsPerPage={50}
                currentPage={2}
                onChange={() => {}}
            />
        );

        paginationItemsAreCorrectlyRendered(wrapperWithExactly2Pages, 2);
        navigationItemsAreCorrectlyRendered(wrapperWithExactly2Pages);
    });

    it('renders <<(disabled)[1]>>(disabled) for 81 elements, 100 items per page. 1 page; when current page equals to 1', () => {
        const wrapperWithExactly1Page = shallow(
            <Pagination
                itemsCount={81}
                itemsPerPage={100}
                currentPage={1}
                onChange={() => {}}
            />
        );

        paginationItemsAreCorrectlyRendered(wrapperWithExactly1Page, 1);
        navigationItemsAreCorrectlyRendered(wrapperWithExactly1Page);
    });
});

const paginationItemsAreCorrectlyRendered = (
    wrapper,
    expectedNumberOfPaginationItems
) => {
    expect(wrapper.find(PaginationItem).length).toEqual(
        expectedNumberOfPaginationItems
    );
};

const navigationItemsAreCorrectlyRendered = wrapper => {
    expect(wrapper.find(NavigationItem).length).toEqual(2);
};

const previousButtonIsEnabled = () => {
    expect(
        wrapperWithMoreThan3Pages
            .find(NavigationItem)
            .at(0)
            .prop('disabled')
    ).toBe(false);
};

const previousButtonIsDisabled = () => {
    expect(
        wrapperWithMoreThan3Pages
            .find(NavigationItem)
            .at(0)
            .prop('disabled')
    ).toBe(true);
};

const nextButtonIsEnabled = () => {
    expect(
        wrapperWithMoreThan3Pages
            .find(NavigationItem)
            .at(1)
            .prop('disabled')
    ).toBe(false);
};

const nextButtonIsDisabled = () => {
    expect(
        wrapperWithMoreThan3Pages
            .find(NavigationItem)
            .at(1)
            .prop('disabled')
    ).toBe(true);
};

const currentPageIsSetToActive = () => {
    expect(
        wrapperWithMoreThan3Pages
            .find(PaginationItem)
            .at(1)
            .prop('isActivePage')
    ).toBe(true);
    expect(
        wrapperWithMoreThan3Pages
            .find(PaginationItem)
            .at(1)
            .html()
    ).toContain('Active');
};
