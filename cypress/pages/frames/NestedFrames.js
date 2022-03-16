class NestedFrames {

    header(){
        return cy.get('h3')
    }

    get frame_top(){
        return 'frame[src="/frame_top"]'
    }

    get frame_bottom(){
        return 'frame[src="/frame_bottom"]'
    }

    get frame_left(){
        return 'frame[src="/frame_left"]'
    }

    get frame_middle(){
        return 'frame[src="/frame_middle"]'
    }

    get frame_right(){
        return 'frame[src="/frame_right"]'
    }
}
export default NestedFrames