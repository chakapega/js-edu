/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
  focus = 'family', 
  knowsProgramming = true,
  config = {family: 4}
  ) {
    const requiredNumberOfHoursWithBasicKnowledge = 800;
    const requiredNumberOfHoursWithoutBasicKnowledge = 1300;
    let requiredHours = 0;

    if (knowsProgramming) {
      requiredHours = requiredNumberOfHoursWithBasicKnowledge / config[focus];
    } else if (knowsProgramming === false) {
      requiredHours = requiredNumberOfHoursWithoutBasicKnowledge / config[focus];
    };

    return Math.ceil(requiredHours);
    };
  