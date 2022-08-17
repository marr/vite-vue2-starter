import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import HelloWorld from "~/components/HelloWorld.vue";

describe("Vue Render", () => {
  test("renders", () => {
    const wrapper = mount(HelloWorld, { propsData: { msg: "Hi Test!" } });
    expect(wrapper.find("h1").text()).toBe("Hi Test!");
  });
});
