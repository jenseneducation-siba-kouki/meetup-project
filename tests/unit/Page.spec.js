import Page from "@/views/Page.vue";
import { shallowMount, RouterLinkStub } from "@vue/test-utils";

const wrapper = shallowMount(Page, {
    stubs: {
        RouterLink: RouterLinkStub,
    },
});

describe("Page", () => {
    test("Should check if the path is correct on router link", () => {
        expect(wrapper.findComponent(RouterLinkStub).props().to).toBe("/#");
    });
});