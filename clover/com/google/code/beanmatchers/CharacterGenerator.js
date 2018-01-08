var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":20,"id":273,"methods":[{"el":12,"sc":3,"sl":10},{"el":19,"sc":3,"sl":14}],"name":"CharacterGenerator","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_10":{"methods":[{"sl":14}],"name":"testHasValidBeanToString","pass":true,"statements":[{"sl":15},{"sl":16},{"sl":17},{"sl":18}]},"test_14":{"methods":[{"sl":10}],"name":"shouldThrowExceptionOnBeanWithPropertyNeedingCustomValueGenerator","pass":true,"statements":[{"sl":11}]},"test_15":{"methods":[{"sl":14}],"name":"testHasValidGettersAndSetters","pass":true,"statements":[{"sl":15},{"sl":16},{"sl":17},{"sl":18}]},"test_24":{"methods":[{"sl":14}],"name":"testHasValidBeanHashCode","pass":true,"statements":[{"sl":15},{"sl":16},{"sl":17},{"sl":18}]},"test_52":{"methods":[{"sl":14}],"name":"shouldProvideValue","pass":true,"statements":[{"sl":15},{"sl":16},{"sl":17},{"sl":18}]},"test_73":{"methods":[{"sl":14}],"name":"shouldProvideDifferingValueOnSubsequentCall","pass":true,"statements":[{"sl":15},{"sl":16},{"sl":17},{"sl":18}]},"test_85":{"methods":[{"sl":14}],"name":"testHasValidBeanEquals","pass":true,"statements":[{"sl":15},{"sl":16},{"sl":17},{"sl":18}]},"test_96":{"methods":[{"sl":14}],"name":"testBeanHasValidGettersAndSetters","pass":true,"statements":[{"sl":15},{"sl":16},{"sl":17},{"sl":18}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [14], [14], [], [], [52, 85, 96, 73, 10, 15, 24], [52, 85, 96, 73, 10, 15, 24], [52, 85, 96, 73, 10, 15, 24], [52, 85, 96, 73, 10, 15, 24], [52, 85, 96, 73, 10, 15, 24], [], []]