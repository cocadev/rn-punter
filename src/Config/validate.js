class ValidateService {

    static trackDetails(mettings, track, rail, races) {

        var description = null;

        if (races > 16 || races < 1) { description = 'Race should be 1 to 16' }
        if (!rail) { description = 'Rail should not be null'}
        if (!track) { description = 'Track Condition should not be null'}
        if (!mettings) { description = 'Meetings should not be null'}
        
        return description
    }

    static login(username, password) {

        var bug = null;

        if (!password) { bug = 'Password should not be null'}
        if (!username) { bug = 'Username should not be null' }
        
        return bug
    }
}

export default ValidateService
